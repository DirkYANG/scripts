load "$NCARG_ROOT/lib/ncarg/nclscripts/csm/gsn_code.ncl"
load "$NCARG_ROOT/lib/ncarg/nclscripts/csm/gsn_csm.ncl"
load "$NCARG_ROOT/lib/ncarg/nclscripts/csm/contributed.ncl"
load "$NCARG_ROOT/lib/ncarg/nclscripts/contrib/time_axis_labels.ncl"
begin
  grib_files=systemfunc("ls ../../fnl*.grib2")
  s=addfiles(grib_files,"r")
  ListSetType(s,"join")
  ;s=addfile("../../fnl_20160616_12_00.grib2","r")
  print(s)
  ;time                           = s->time
  lev                            = s[0]->lv_ISBL6
  lev1                            = s[0]->lv_ISBL0
  lev2                            = s[0]->lv_ISBL8
  print(lev)
  print(lev1)
  print(lev2)
  lat                            = s[0]->lat_0({30:60})
  lon                            = s[0]->lon_0({50:120})
  geopt1                          = s[:]->HGT_P0_L100_GLL0(:,:,{30:60},{50:120})
  t1                              = s[:]->TMP_P0_L100_GLL0(:,:,{30:60},{50:120})
  ;hgt                            = (geopt*geopt@scale_factor+geopt@add_offset)/9.81
  geopt                          = smth9(geopt1, 0.5, 0.4, True)
  ;t                              = t1*t1@scale_factor+t1@add_offset-273
  t                              = smth9(t1, 0.5, 0.4, True)
  copy_VarCoords(geopt1, geopt)
  copy_VarCoords(t1, t)
;---------------------------------------------------------------- 
  type                           = "png"
  type@wkHeight                  = 1500
  type@wkWidth                   = 2000
;---------------------------------------------------------------- 
  res                            = True
  res@gsnMaximize                = True
  res@gsnFrame                   = False
  res@gsnDraw                    = False
  res@gsnAddCyclic               = False
  res@gsnMaximize                = True
  res@pmLegendDisplayMode        = "NoCreate"
  res@lbLabelsOn                 = False

  res@tmXTOn                     = False
  res@tmYROn                     = False
  res@tmYLValues                 = (/30,35,40,45,50,55,60/)
  res@tmYLLabels                 = (/"30~S~o~N~N","35~S~o~N~N","40~S~o~N~N","45~S~o~N~N","50~S~o~N~N","55~S~o~N~N","60~S~o~N~N"/)
  res@tmXBValues                 = (/50,60,70,80,90,100,110,120/)
  res@tmXBLabels                 = (/"50~S~o~N~E","60~S~o~N~E","70~S~o~N~E","80~S~o~N~E","90~S~o~N~E","100~S~o~N~E","110~S~o~N~E","120~S~o~N~E"/)

  res@mpOutlineOn                = True
  res@mpLimitMode                = "LatLon"
  res@mpMaxLatF                  = max(lat)
  res@mpMinLatF                  = min(lat)
  res@mpMaxLonF                  = max(lon)
  res@mpMinLonF                  = min(lon)
  res@mpFillOn                   = False
  res@mpDataBaseVersion          = "MediumRes"
  res@mpDataSetName              = "Earth..4"
  res@mpOutlineBoundarySets      = "National"
  res@mpOutlineSpecifiers        = (/"China:states"/)

  res@cnFillOn                   = False
  res@cnInfoLabelOn              = False
  res@cnLinesOn                  = True           ; turn on contour lines
  res@cnMonoLineColor            = True
  res@cnLabelMasking             = True
  res@cnLineLabelsOn             = True
  res@cnLineColor                = "black"
  res@cnLineThicknessF           = 8.0
  res@cnLineLabelDensityF        = 3.0
  res@cnLineLabelFontColor       = "black"
  res@cnLineLabelFontHeightF     = 0.005
  

  res1                           = True
  res1@gsnMaximize               = True
  res1@gsnFrame                  = False
  res1@gsnDraw                   = False
  res1@cnInfoLabelOn             = False
  res1@cnLineDashPattern         = 8
  res1@cnLineThicknessF          = 8.0
  res1@cnLineColor               = "red"
  res1@cnLineLabelFontColor      = "red"
  res1@cnLineLabelDensityF       = 3.0

  ;str                            = (/"a","b","c","d"/)
;---------------------------------------------------------------- 
do i=0,dimsizes(t(:,0,0,0))-1
   res@tiMainString              = "500hPa height NCEP FNL analysis"
   times=i*6 
   if(times.ge.24.and.times.lt.48)then
     res@gsnRightString="2016-06-17:"+sprinti("%2.2i",times-24)
   else if(times.ge.48) then
     res@gsnRightString="2016-06-18:"+sprinti("%2.2i",times-48)
   else
     res@gsnRightString="2016-06-16:"+sprinti("%2.2i",times)
   end if
   end if

   name_path                     = "./500hpa/" 
   name_1                        = "hgt-t500hPa_"+i
   name                          = name_path+"/"+name_1
   wks                           = gsn_open_wks(type,name) 
   plot1                         = gsn_csm_contour_map(wks,geopt(i,{50000},:,:), res)
   plot2                         = gsn_csm_contour(wks,t(i,{50000},:,:), res1)
   overlay(plot1,plot2)
   draw(plot1)
   frame(wks)
end do 
;-----------------------------------------------------------
do i=0,dimsizes(t(:,0,0,0))-1
 
   times=i*6 
   if(times.ge.24.and.times.lt.48)then
     res@gsnRightString="2016-06-17:"+sprinti("%2.2i",times-24)
   else if(times.ge.48) then
     res@gsnRightString="2016-06-18:"+sprinti("%2.2i",times-48)
   else
     res@gsnRightString="2016-06-16:"+sprinti("%2.2i",times)
   end if
   end if
   
   res@tiMainString              = "200hPa height NCEP FNL analysis"
   name_path1                     = "./200hpa/" 
   name_11                        = "hgt-t200hPa_"+i
   name1                          = name_path1+"/"+name_11
   wks1                           = gsn_open_wks(type,name1) 
   plot11                         = gsn_csm_contour_map(wks1,geopt(i,{20000},:,:), res)
   plot21                         = gsn_csm_contour(wks1,t(i,{20000},:,:), res1)
   overlay(plot11,plot21)
   draw(plot11)
   frame(wks1)
end do 
;-----------------------------------------------------------

end