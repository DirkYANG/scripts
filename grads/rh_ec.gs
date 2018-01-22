'reinit'
'sdfopen  /Users/yangrui/Documents/research/WRF/case/bole20160616/EC/20160616-18level.nc'

'set mpdset cnworld'
'set lon 50 120'
'set lat 20 60'

tt=5
while(tt<=5)
'set grid off'
'set grads off'
'set clevs  60 70 80 90 100'
'run   /Users/yangrui/soft/grads-2.1.0/mycolors/6colors.gs'
'set t 'tt''
'set lev 700'
'set cmin 60'
'set gxout shaded'
'd r'
'cbarn'
'set gxout vector'
'd skip(u,10);skip(v,10)'
'set line 0 3 2'
'draw recf 0.5 7.2 1.5 7.68'
'set string 1 c 10 0'
'set strsiz 0.1 0.1'
'draw string 1.0 7.4 (a)'
'set line 1 1 2'
'draw line 0.5 7.2 1.5 7.2'
'draw line 1.5 7.2 1.5 7.68'
'q time'
x=subwrd(result,3)
*'draw shp /Users/yangrui/soft/grads-2.1.0/shp/CHN_adm3.shp'
*'draw title relative humidity 700hPa 'x' '
'printim ./rh700hpa/'tt'.png x2000 y2000 white'
'c'
tt=tt+1
endwhile
;