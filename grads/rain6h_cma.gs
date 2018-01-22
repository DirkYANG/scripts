'reinit'
'open rain.ctl'
'set grid off'
'set gxout contour'
'set mpdset cnworld'
'set lon 80 88'
'set lat 41 47'
tt=6
while(tt<=48)
'set grads off'
'set t 'tt''
tt5=tt-5
'set cint 0.5'
'set clevs  0.2 6 12 24 48 96'
*'set clevs 3 9 12 15 18 24'
'run /home/yangrui/grads/grads-2.1.0/data2/colorbars/rain_xj.gs'
'define sumr=sum(crain(offt+0),t='tt5',t='tt')'
'set gxout shaded'
'd sumr'
'cbarn 1 1 10.2 4.5'
'q time'
x=subwrd(result,3)
'draw shp /home/yangrui/grads/grads-2.1.0/data2/shp/CHN_adm3.shp'
'q w2xy  87.16 41.82'
xx=subwrd(result,3)
yy=subwrd(result,6)
'set line 2'
*'draw mark 3 'xx' 'yy' 0.35'
'draw title obs 6h precipitation 'x''
'printim rain6h/'tt'.png white x1000 y1000'
'c'
tt=tt+1
endwhile
;
