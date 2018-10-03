  
  
  
  
'  
  Environment.LoadFromFile("C:\Automation_TCRM\kptravels\DATA\Appsettings.xml")
'  
  msgbox Environment.Value("HTMLResultsPath")
  

 
'Set b=description.Create()
'		
'	b("micclass").value = "Browser"
'		
'	set s = Desktop.ChildObjects(b)
'	 
'	For i = 0 To s.count-1
'		
'	msgbox	s(i).getroproperty("title")
'	
'Next
'
 
' End if
'msgbox int(c.count)

'Scroll down a page

Browser("A").Page("B").Mousemove x,y
For i=1 to scrollheight
browser("A").Page("B").Dblclick x,y
next

Set objBase = Browser("micClass:=Browser").Page("micClass:=Page")
    objBase.Object.body.doScroll("pageDown")




  Option Explicit
  Dim a,b,c
'  g=5
  Call add(1,2,3)
  
  Public Function add(a,b,c)
'  Dim x 
''Option explicit
Dim x(4)
'  	x=2
'	Dim x(67) = 1
	msgbox lbound(x)
	msgbox ubound(x)
'	Dim x
  	 a=b+c
  	 msgbox a
  	Dim y
	y=5
'  	msgbox x
  	Dim g 
  	g=7
  	msgbox y
  End Function
'  Call su
  Public Function su
  	e=4
  	t=3
  	w = e+t
  	msgbox w
  	
  End Function
  
  


'Set des = Description.Create
'des("micclass").value = "Webtable"
'
'Set s = Browser("KPNHOME").Page("Journey Planner").ChildObjects(des)
'
'for i=0 to  s.count-1 
'	
'print	s(i).highlight
'
'wait(2)
'
'next

'
'datatable.AddSheet("nalli")
'datatable.GetSheet("nalli").AddParameter "Name","ishnu"
''msgbox datatable.GetSheet("nalli").GetParameter("Name").ValueByRow(1)
'datatable.GetSheet("nalli").SetCurrentRow(1)
'msgbox datatable.Value("Name","nalli")



  
'
'
''below function will invoke both datasheet and Tests script sheet 
'Call UpdateIterationCount_Script("C:\Automation_TCRM\kptravels\TEST\kptravels_Datasheet.xls","C:\Automation_TCRM\kptravels\TEST\kptravelsScript.xlsx")
'
''below function will read each function or keyword from Testscript excel and execute it .
'ExecuteTestCase "kptravelsScript.xlsx"
	
'Next



'  
'rc = datatable.GlobalSheet.GetRowCount
''For i = 1 To rc Step 1D:\ProjectSelenium
'datatable.GlobalSheet.SetCurrentRow(2)
'val = datatable.Value("Test","Global")
'msgbox	val
'



'SET wb = Browser("KPNHOME").Page("E-Ticketing").WebTable("Plan My Journey")
'
'rowcount = wb.RowCount
'
'For i = 1 To rowcount Step 1
'
'Colcou = wb.ColumnCount(i)
'	
'	For j = 1 To  colcou
'	
'	sal = wb.GetCellData(i,j)
'	
'	print sal
'		
'	Next
'	
'Next


