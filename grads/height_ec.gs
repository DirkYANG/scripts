'reinit'
'sdfopen  /Users/yangrui/Documents/research/WRF/case/bole20160616/EC/20160616-18level.nc'

'set mpdset cnworld'
'set lon 30 130'
'set lat 20 60'

tt=1
while(tt<=12)
'set grid off'
'set grads off'
*'set clevs  0.4, 0.8, 1.6, 3.2, 6.4, 12.80, 25.6,51.2, 102.4'
*'run   /Users/yangrui/soft/grads-2.1.0/11colors.gs'
'set t 'tt''
'set lev 500'
'set ccolor 2'
'set cthick 12'
'set map 1 1 6'
'set clab forced'
*'set gxout shaded'
'd z/10'
'set gxout vector'
'd skip(u,15);skip(v,15)'
'q time'
x=subwrd(result,3)
*'draw shp /Users/yangrui/soft/grads-2.1.0/shp/CHN_adm3.shp'
'draw title geopotential height 500hPa 'x' '
'printim ./height500hpa/'tt'.png x2000 y2000 white'
'c'
tt=tt+1
endwhile
;