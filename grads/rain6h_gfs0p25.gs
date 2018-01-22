'c'
'reinit'
'open F:/work/WRF_case/bole_2016061600/DATA/gfs_f/2016061600_0.25du/grib.ctl'
tt=7
while(tt<=48)
'set lat 41 47'
'set lon 80 90'
'set grid off'
'set gxout shaded'
'set mpdset cnworld'
'set grads off'
'set parea 0.6 9.6 0.5 8'
'set t 'tt''
tt6=tt-6
'set cint 0.5'
'set clevs 3 9 12 15 18 24'
'run F:/work/WRF_case/bole_2016061600/DATA/gfs_f/color_rain_xj.gs'
'd apcpsfc(t='tt')-apcpsfc(t='tt6')'
'cbarn 1 1 10.2 4.5'
'q time'
x=subwrd(result,3)
'draw shp D:/opengrads/Classic/shp/CHN_adm3.shp'
'q w2xy  87.16 41.82'
xx=subwrd(result,3)
yy=subwrd(result,6)
'set line 2'
'draw mark 3 'xx' 'yy' 0.35'
'draw title precipitation in 6h 'x''
'printim  F:/work/WRF_case/bole_2016061600/DATA/gfs_f/2016061600_0.25du/rain6h/'tt'.png white x2000 y2000'
'c'
tt=tt+1
endwhile
;