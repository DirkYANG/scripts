'reinit'
  'open ../data/diagnosis.ctl ' 
  'set lat 41.5 47'
  'set lon 80 90'
  'set t 1'
  'set z 1'  
  'set gxout shaded'
  'set grads off'
  'set grid off'
  'd HGT'        
 
*****************************************************************
   say ' Click graphic windows to specify the first point cross section_line! ' 
   ' q bpos '                                            
   x0=subwrd (result,3)                            
   y0=subwrd (result,4) 
   say 'x0 ' x0 ' y0 ' y0                                                                     
   say ' Click graphic windows to specify the second point cross_section_line! '     
   ' q bpos '                                       
   x1=subwrd (result,3)                           
   y1=subwrd (result,4)  
   say 'x1 ' x1 ' y1 ' y1                                                                           
   ' draw line 'x0'  'y0'  'x1'  'y1' ' 

**************************************************************************************
 ' q  xy2w  'x0'  'y0' '  
   lon0=subwrd (result,3) 
   lat0=subwrd (result,6)
   say 'lat0='lat0 ' lon0='lon0
   ' q  xy2w  'x1'  'y1' '  
   lon1=subwrd (result,3)
   lat1=subwrd (result,6) 
   say 'lat1='lat1 ' lon1='lon1
****DisPerLon,DisPerLat is the distance between 1 degree of lat or lon defined by ourselves***
   DisPerLon=100.
   Lx=(lon1-lon0)*DisPerLon 
   DisPerLat=110.
   Ly=(lat1-lat0)*DisPerLat 
   ' d pow ('Lx',2)+pow ('Ly',2)'
   say result
   L=subwrd(result,4)
   say 'L='L
   'd pow ('L',1/2)'
   LAB=subwrd (result,4) 
   say 'distance between two point appointed ' LAB
*********calculate the increment of the nearby point of inclon at x axi*****
***horRes is the the spacing of neighbouring point on the oblique line,horRes should be larger than horizontal resolution of model******
   horRes=3.
   decimal=LAB/horRes
   say 'decimal='decimal 
*********decimal is a float whose has two numbers before point********                     
   decimal_part=substr(decimal,3,20)
   say 'decimal_part='decimal_part
   n=decimal-decimal_part+1  
   say 'n='n
   inclat=(lat1-lat0)/n
   inclon=(lon1-lon0)/n 
*** calculate the points on the oblique line****

   i=1
   while (i<=n) 
      lon.i=lon0+(i-1)*inclon
      lat.i=lat0+(i-1)*inclat                                                                                
      i=i+1                                                                                                                   
   endwhile   
       
********** according to GrADS format to get the variable beginning from t=t0**********
*****NT is the times of model simulation,t0 is the start time chosen by you*****
   NT= 49
   t0= 1
   
 while(t0<=NT)
   'set t 't0''     
   nz=1
     
*****NZ is the vertical levels of the model *****
   NZ=29 
   while (nz<=NZ)   
      i=1 
      'set z 'nz' '   
      while (i<=n)
         'set lon 'lon.i' '
         'set lat 'lat.i' '
         'd u'           
         dummy=sublin(result,2)
*****save the data in the file of 'gad.bin'****
         data=subwrd(dummy,4)
         say 'data='data        
         write('gad.bin',data,'append')
         i=i+1
      endwhile
      nz=nz+1
   endwhile
 t0=t0+1
 endwhile  
;

   
