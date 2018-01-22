'reinit'
'set grid off'
'open  cloudrain.ctl'
'set lon 81 90'
'set lat 45'
'set mpdset cnworld'
'set lev 2 10'
tt=1
while (tt <= 49)
'set grads off'
'set parea 0.8 10 0.8 8'
'set map 1 1 9'
'set t 'tt''
'set xlint 2'
'set xlopts 1 12 0.33'
'set ylopts 1 12 0.33'
'set gxout shaded'
*'set clevs 30 32 34 36 38 40'
*'set ccols 0 7 10 11 4 9 14 '
'run /home/yangrui/grads/grads-2.1.0/data2/colorbars/rain_xj.gs'
'd qice*1000'
'cbarn 1 1 10.2 4.5'
'q time'
x=subwrd(result,3)
'draw title qcloud/qice(g/kg) 'x''
'printim ./qcloud_qice/'tt'.png white x2000 y2000'
'c'
tt=tt+1
endwhile
;
