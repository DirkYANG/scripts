'reinit'
'sdfopen  ./20160616-18.nc'

'set mpdset cnworld'
'set lon 50 130'
'set lat 20 70'

tt=1
while(tt<=12)
'set t 'tt''
'set grid off'
'set grads off'
'set xlopts 1 6 0.22'
'set ylopts 1 6 0.22'
'set gxout barb'
'set lev 700'
'd skip(u,3);skip(v,3)'
'set gxout contour'
'set ccolor 2'
'set cthick 6'
'set map 1 1 6'
'set clab forced'
'set lev 700'
'd t-273'
'q time'
x=subwrd(result,3)
'draw shp /Users/yangrui/soft/grads-2.1.0/shp/CHN_adm1.shp'
*'draw title circulation 'x' '
'printim ./uv&t700hpa/'x'.png x1000 y1000 white'
'c'
tt=tt+1
endwhile
;