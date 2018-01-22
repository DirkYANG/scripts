'reinit'
'sdfopen  ./20160616-18.nc'
'set mpdset cnworld'

'set xlpos -10'
'set ylpos -10'
'set lev 850'

tt=5
'set parea 0.6 4.9 0.5 8'
'set lon 15 135'
'set lat 25 85'
'set grads off'
'set t 'tt
len = 0.4
scale = 2
xrit = 9.8
ybot = 0.15
'set arrscl 'len' 'scale
'set arrlab off'
'define p=lev'

'define es=(6.11*exp((17.26*t)/(t-35.86)))'

'define qs=0.622*es/(p-0.378*es)' 

'define qu=(u*q/9.8)*1000' 
'define qv=(v*q/9.8)*1000'

'set gxout shaded'
'define qdiv=hdivg(q.1*u/9.8,q.1*v/9.8)'
'run   /Users/yangrui/soft/grads-2.1.0/mycolors/shuiqi_flux2.gs'
'set clevs -0.7 -0.5 -0.3 -0.1 0 0.1 0.3 0.5 0.7'
'set lon 50 130'
'set lat 30 80'
'd qdiv*10000000'
'set gxout stream'
'set strmden 5'
*'d skip('qu',2);skip('qv',2)'
'd qu;qv'
'set line 0 3 2'
'draw recf 0.6 5.45 1.0 5.85'
'set font 1'
'set string 1 c 4 0'
'set strsiz 0.15 0.15'
'draw string 0.8 5.65 (a)'
'set line 1 1 3'
'run axis.gs -type b  -position o -label on -interval 10  -size 0.08 -color 1 -lfont 5 -lsize 0.1 -lthick 0.3  -langle 0 -voffset -0.05 -suffix `3.'
'run axis.gs -type l  -position o -label on -interval 10  -size 0.08 -color 1 -lfont 5 -lsize 0.1 -lthick 0.3  -langle 0 -hoffset -0.05 -suffix `3.'

'draw shp /Users/yangrui/soft/grads-2.1.0/shp/CHN_adm1.shp'


tt=7
'set parea 5.7 10 0.5 8'
'set lon 15 135'
'set lat 25 85'
'set grads off'
'set t 'tt
len = 0.4
scale = 2
xrit = 9.8
ybot = 0.15
'set arrscl 'len' 'scale
'set arrlab off'
'define p=lev'

'define es=(6.11*exp((17.26*t)/(t-35.86)))'

'define qs=0.622*es/(p-0.378*es)' 

'define qu=(u*q/9.8)*1000' 
'define qv=(v*q/9.8)*1000'

'set gxout shaded'
'define qdiv=hdivg(q.1*u/9.8,q.1*v/9.8)'
'run   /Users/yangrui/soft/grads-2.1.0/mycolors/shuiqi_flux2.gs'
'set clevs -0.7 -0.5 -0.3 -0.1 0 0.1 0.3 0.5 0.7'
'set lon 50 130'
'set lat 30 80'
'd qdiv*10000000'
'cbarn 0.6 1 10.3 4.3'
'set ccolor 1'
'set gxout stream'
'set strmden 5'
*'d skip('qu',2);skip('qv',2)'
'd qu;qv'
'set line 0 3 2'
'draw recf 5.7 5.45 6.1 5.85'
'set font 1'
'set string 1 c 4 0'
'set strsiz 0.15 0.15'
'draw string 5.9 5.65 (b)'
'set line 1 1 3'
'run axis.gs -type b  -position o -label on -interval 10  -size 0.08 -color 1 -lfont 5 -lsize 0.1 -lthick 0.1  -langle 0 -voffset -0.05 -suffix `3.'
'run axis.gs -type l  -position o -label on -interval 10  -size 0.08 -color 1 -lfont 5 -lsize 0.1 -lthick 0.1  -langle 0 -hoffset -0.05 -suffix `3.'


*rc = arrow(xrit-0.25,ybot+0.2,len,scale)

'q time'
x=subwrd(result,3)
'draw shp /Users/yangrui/soft/grads-2.1.0/shp/CHN_adm1.shp'
'printim ./vaporflux850hpa/vaporflux850hpa_1700-12.pdf white'
'c'

function arrow(x,y,len,scale)
'set line 1 1 4'
'draw line 'x-len/2.' 'y' 'x+len/2.' 'y
'draw line 'x+len/2.-0.05' 'y+0.025' 'x+len/2.' 'y
'draw line 'x+len/2.-0.05' 'y-0.025' 'x+len/2.' 'y
'set string 1 c'
'set strsiz 0.1'
'draw string 'x' 'y-0.1' 'scale'm/s'
return
;