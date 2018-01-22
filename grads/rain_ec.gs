'reinit'
'sdfopen  /Users/yangrui/Documents/research/WRF/case/bole20160616/EC/rain125.nc'
'set grid off'
'set mpdraw off'
'set lon 79 88'
'set lat 40.5 48'
'set gxout shaded'


tt=2
while(tt<=2)
'set clevs  0.4, 0.8, 1.6, 3.2, 6.4, 12.80, 25.6,51.2, 102.4'
'run   /Users/yangrui/soft/grads-2.1.0/11colors.gs'
'set t 'tt''
*ttc=tt-2
*'set cint 0.5'
'd 1000.0*tp(t='tt')'

'cbarn'
'q time'
x=subwrd(result,3)
'draw shp /Users/yangrui/soft/grads-2.1.0/shp/CHN_adm3.shp'
'draw title precipitation in 6h 'x' '
'printim ./pic6h/'tt'.png x2000 y2000 white'
'c'
tt=tt+1
endwhile
;