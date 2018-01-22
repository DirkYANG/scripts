'reinit'
'open  F:\WRF_case\case_convection\xinjiang\bole_2016061600\observation\GPM\616.hourly.rain.v6.ctl'
'set grid off'

*'set gxout contour'
*'set mpdset cnworld'
'set mpdraw off'
'set lon 79 88'
'set lat 40.5 48'
'set gxout shaded'
*'set ccolor rainbow'

tt=4
while(tt<=5)
'run  F:\WRF_case\case_convection\xinjiang\bole_2016061600\observation\GPM\11colors.gs'
'set t 'tt''
'set grads off'
'set vpage 0 11 0 8.5'
'set parea 0 11 0 8.5'
'set clevs  0.4, 0.8, 1.6, 3.2, 6.4, 12.80, 25.6,51.2, 102.4'
ttc=tt-2
*'set cint 0.5'
'define sumr=sum(precip(offt+0),t='ttc',t='tt')'
'd sumr'
'cbarn 1 1 10.5 5.0'
'q time'
x=subwrd(result,3)
'draw shp D:\opengrads\Classic\shp\CHN_adm3.shp'
'draw title precipitation in 3h 'x' '
'printim F:\WRF_case\case_convection\xinjiang\bole_2016061600\observation\GPM\pic\'tt'.png x2000 y2000 white'
'c'
tt=tt+1
endwhile
;