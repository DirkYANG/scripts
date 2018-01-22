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
  'cbar'
  'set line 1 1 12'
******************************  ***********************************
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

***** Ax0,y0Bx1,y1Alon0,lat0Blon1,lat1 *****
 ' q  xy2w  'x0'  'y0' '  
   lon0=subwrd (result,3) 
   lat0=subwrd (result,6)
   say 'lat0='lat0 ' lon0='lon0
   ' q  xy2w  'x1'  'y1' '  
   lon1=subwrd (result,3)
   lat1=subwrd (result,6) 
   say 'lat1='lat1 ' lon1='lon1
 'printim cross.png white x1000 y1000'  
;

   
