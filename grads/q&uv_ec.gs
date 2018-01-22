'reinit'
'sdfopen  ./20160616-18.nc'

'set mpdset cnworld'
'set lon 50 130'
'set lat 20 70'
'set lev 700'
'set parea 0.8 10 0.6 8'
'set xlopts 1 6 0.2'
'set ylopts 1 6 0.2'

tt=1
while(tt<=12)
'set t 'tt''
'set grid off'
'set grads off'
'set gxout shaded'
'set clab forced'
*'set clevs 0.004 0.006 0.008 0.010 0.012'
'colormap MPL_Blues'
'd q*1000'
'cbarn 1 1 10.3 4.5'
'set gxout barb'
'd skip(u,3);skip(v,3)'
'q time'
x=subwrd(result,3)
'draw shp /Users/yangrui/soft/grads-2.1.0/shp/CHN_adm1.shp'
*'draw title circulation 'x' '
'printim ./q&uv700hpa/'x'.png x1000 y1000 white'
'c'
tt=tt+1
endwhile
;