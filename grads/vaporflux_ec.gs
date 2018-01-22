'reinit'
'sdfopen  ./20160616-18.nc'
'set mpdset cnworld'
'set parea 0.8 10 0.6 8'
'set xlopts 1 6 0.2'
'set ylopts 1 6 0.2'
'set lev 500'
tt=1
while(tt<=12)
'set lon 50 130'
'set lat 20 70'
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
'd qdiv*10000000'
'cbarn 1 1 10.3 5'
'set gxout vector'
*'set strmden 1'
'd skip('qu',2);skip('qv',2)'
*'d qu;qv'
'set line 0 3 2'
*'draw recf 0.7 7.2 1.5 7.72'
*'set string 1 c 10 0'
*'set strsiz 0.1 0.1'
*'draw string 1.0 7.4 (b)'
'set line 1 1 2'
'draw line 0.5 7.2 1.5 7.2'
'draw line 1.5 7.2 1.5 7.62'

rc = arrow(xrit-0.25,ybot+0.2,len,scale)

'q time'
x=subwrd(result,3)
'draw shp /Users/yangrui/soft/grads-2.1.0/shp/CHN_adm1.shp'
'draw title  qdiv 500hPa 'x' '
'printim ./vaporflux500hpa/'tt'.png x1000 y1000 white'
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
'draw string 'x' 'y-0.1' 'scale'm/s'
return
;