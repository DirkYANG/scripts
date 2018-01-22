'reinit'
*'sdfopen  ./20160616-18.nc'
'sdfopen  ./1213.nc'
'set mpdset cnworld'
'set lon 40 90'
'set lat 40 60'
'set xlopts 1 6 0.2'
'set ylopts 1 6 0.2'

tt=1
while(tt<=1)
'set xlpos -20'
'set ylpos -20'
'set grid off'
'set grads off'
'set parea 0.8 9.5 1.5 8 '
'set clevs 2 4 6 8 10 12 14 16 18 20'
*'set clevs -6e-5 -4e-5 -2e-5 0 2e-5 4e-5 6e-5'
'run  /Users/yangrui/soft/grads-2.1.0/mycolors/fft.gs'
*'set ccols 16 18 20 24 26 30 32 34'
'set t 'tt''
'set z 1'
'set gxout shaded'
*'define div=hdivg(u,v)'
*'hotcold_18lev.gs'
*'colormap hotcold_18lev'
'd vo*10e4'
'set cthick 1'
'cbarn 0.5 1 10 4.5'
'set gxout contour'
*'set clevs 568 572 576 580 584'
'set cint  4'
'set cthick 1'
'd z/98'
'set gxout vector'
'set cthick 1'
'set ccolor 1'
len = 0.4
scale = 10
xrit = 10.6
ybot = 1.0
'set arrscl 'len' 'scale
'set arrlab off'
'd skip(u,5,5);skip(v,5,5)'
rc = arrow(xrit-0.25,ybot+0.2,len,scale)
'set ccolor 2'
'set cthick 1'
'set cstyle 3'
'd t'
'q time'
x=subwrd(result,3)
yr=substr(x,9,4)
mn=substr(x,6,3)
dy=substr(x,4,2)
hr=substr(x,1,2)
xx=yr mn dy hr
'set font 21 /Users/yangrui/soft/grads-2.1.0/data2/timesfont/TIMES.TTF'
'set font 22 /Users/yangrui/soft/grads-2.1.0/data2/timesfont/TIMESI.TTF'
'set font 23 /Users/yangrui/soft/grads-2.1.0/data2/timesfont/TIMESBI.TTF'
'set font 24 /Users/yangrui/soft/grads-2.1.0/data2/timesfont/TIMESBD.TTF'
'run axis.gs -type b -position o -label on -lsize 0.18 -voffset -0.1 -suffix `3. -lfont 4' 
'run axis.gs -type l -position o -label on -lsize 0.18 -hoffset -0.1 -suffix `3. -lfont 4'
'draw shp /Users/yangrui/soft/grads-2.1.0/shp/CHN_adm1.shp'
*'draw title divergence 500hPa 'x' '
'printim ./vor500hpa/'xx'_new.pdf white'
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
'draw string 'x' 'y-0.1' 'scale
return
;