'reinit'
'sdfopen  ./20160616-18.nc'

'set mpdset cnworld'
'set lon 40 120'
'set lat 15 60'
'set lev 700'
tt=1
while(tt<=12)
'set xlpos -10'
'set ylpos -10'
'set parea 0.8 10.0 0.8 8.5'
'set grid off'
'set grads off'
'set clab masked'
'set map 1 1 1'
'set clevs  8 10 12 14 16'
'run   /Users/yangrui/soft/grads-2.1.0/mycolors/6colors.gs'
'set t 'tt''
'set cmin 8'
'set gxout shaded'
'define wind=sqrt(u*u+v*v)'
'd wind'
'cbarn 1.2 1 10.3 4.6'
'set gxout contour'
'd z/98'
'set line 1 1 8'
'q w2xy 77 39'
x1=subwrd(result,3)
y1=subwrd(result,6)
'q w2xy 90 48'
x2=subwrd(result,3)
y2=subwrd(result,6)
'draw rec 'x1' 'y1' 'x2' 'y2''
'set gxout barb'
'set ccolor 1'
'd skip(u,3);skip(v,3)'
'run axis.gs -type b  -position o -label on -interval 10  -size 0.1 -color 1 -lfont 4 -lsize 0.15 -lthick 0.9  -langle 0 -voffset -0.05 -suffix `3.'
'run axis.gs -type l  -position o -label on -interval 10  -size 0.1 -color 1 -lfont 4 -lsize 0.15 -lthick 0.3  -langle 0 -hoffset -0.05 -suffix `3.'
'q time'
x=subwrd(result,3)
yr=substr(x,9,4)
mn=substr(x,6,3)
dy=substr(x,4,2)
hr=substr(x,1,2)
xx=yr mn dy hr
'q dims'
result=sublin(result,4)
p=subwrd(result,6)
'draw shp /Users/yangrui/soft/grads-2.1.0/shp/CHN_adm1.shp'
*'draw title wind 'p'hPa 'xx' '
'tibetan 'p' 1'
'printim ./wind&uv'p'hpa/wind&uv'p'hpa_'xx'.pdf  white'
'c'
tt=tt+1
endwhile
;