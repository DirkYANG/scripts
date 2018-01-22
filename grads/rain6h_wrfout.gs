'reinit'
'open  rain.ctl'
'set grid off'
'set gxout shaded'
'set mpdset cnworld'
'set lon 75 90'
'set lat 38 48'
tt=7
while(tt<=25)
'set grads off'
'set t 'tt''
tt6=tt-6
'set cint 0.5'
'set clevs 3 9 12 15 18 24'
'run /home/yangrui/grads/grads-2.1.0/data2/colorbars/rain_xj.gs'
'd rainnc(t='tt')-rainnc(t='tt6')'
'cbarn 1 1 10.2 4.5'
'q time'
x=subwrd(result,3)
'draw shp /home/yangrui/grads/grads-2.1.0/data2/shp/CHN_adm3.shp'
'q w2xy  87.16 41.82'
xx=subwrd(result,3)
yy=subwrd(result,6)
'set line 2'
'draw mark 3 'xx' 'yy' 0.35'
'draw title precipitation in 6h 'x''
'printim  ./rain6h/'tt'.png white x2000 y2000'
'c'
tt=tt+1
endwhile
;
