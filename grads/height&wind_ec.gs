'reinit'
'sdfopen  ./20160616-18.nc'

'set mpdset cnworld'
'set lon 50 140'
'set lat 10 60'

tt=1
while(tt<=12)
'set grid off'
'set grads off'
'set xlpos -10'
'set ylpos -10'
'set parea 0.8 10.0 0.8 8.5'
'set t 'tt''
'set lev 500'
'set cthick 3'
'set map 1 1 1'

*'set xlopts 1 6 0.28'
*'set ylopts 1 6 0.18'
'set clab masked'
*'set cmin 30'
*'set gxout shaded'
*'d sqrt(u*u+v*v)'
*'cbarn 1 1 10.3 5.0'

'set cint 4'
'set gxout contour'
'set ccolor 1'
'd z/98'
'set line 1 1 8'
'q w2xy 77 39'
x1=subwrd(result,3)
y1=subwrd(result,6)
'q w2xy 90 48'
x2=subwrd(result,3)
y2=subwrd(result,6)
'draw rec 'x1' 'y1' 'x2' 'y2''
'set ccolor 2'
'set cstyle 3'
'd t'
'set gxout vector'
'set ccolor 1'
len = 0.5
scale = 20 'm/s'
vcx0= 8.3
vcx1= 10.0
vcy0= 7.1
vcy1= 7.7
xrit = vcx0/2+vcx1/2+0.25
ybot = vcy0/2+vcy1/2-0.2
'set arrscl 'len' 'scale
'set arrlab off'
'd skip(u,3);skip(v,3)'
'run axis.gs -type b  -position o -label on -interval 10 -thick 6  -size 0.1 -color 1 -lfont 5 -lsize 0.15 -lthick 0.9  -langle 0 -voffset -0.05 -suffix `3.'
'run axis.gs -type l  -position o -label on -interval 5  -thick 6  -size 0.1 -color 1 -lfont 5 -lsize 0.15 -lthick 0.3  -langle 0 -hoffset -0.05 -suffix `3.'
'draw shp /Users/yangrui/soft/grads-2.1.0/shp/CHN_adm1.shp'
*'draw title geopotential height 'p'hPa 'x' '

'set line 0 1 2'
'draw recf 'vcx0' 'vcy0' 'vcx1' 'vcy1''
'set string 1 c 3 0'
'set strsiz 0.1 0.1'
'draw string 'vcx0/2+vcx1/2' 'vcy0/2+vcy1/2+0.2' Reference Vector'
'set line 1 1 6'
'draw line 'vcx0' 'vcy0' 'vcx0' 'vcy1''
'draw line 'vcx0' 'vcy0' 'vcx1' 'vcy0''
rc = arrow(xrit-0.25,ybot+0.2,len,scale)
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
say p
'printim ./height'p'hpa/hgt'p'hpa_'xx'.pdf white'
'c'
tt=tt+1
endwhile
function arrow(x,y,len,scale)
'set line 1 1 4'
'draw line 'x-len/2.' 'y' 'x+len/2.' 'y
'draw line 'x+len/2.-0.05' 'y+0.025' 'x+len/2.' 'y
'draw line 'x+len/2.-0.05' 'y-0.025' 'x+len/2.' 'y
'set string 1 c'
'set strsiz 0.1'
'draw string 'x' 'y-0.15' 'scale 
return
;