  
  
  
  Set s = CreateObject("Scripting.FileSystemObject")
  
 Set  d = s.GetDrive("C:\")
  
  msgbox d.AvailableSpace

Do While f<>true

Loop
	




 mon = MonthName(Split(Now,"/")(0))
 yea = Trim(split((Split(Now,"/")(2))," ")(0))
 msgbox yea
 
Browser("KPNHOME").Page("E-Ticketing").Image("calendarIcon").Click

Set de = Description.Create()
de("micclass").value = "WebElement"
de("class").value = "ui-datepicker.*"
Set wtbs = Browser("index:=0").Page("index:=0").ChildObjects(de)
For j = 0 To wtbs.count-1
	If wtbs(j).getroproperty("innertext") = mon&" "&yea Then
	wtbs(j).highlight
	End If
Next

	


Set des = Description.Create()
des("micclass").value = "WebTable"
'des("html tag").value = "Table"
des("class").value = "ui-datepicker.*"
'des("visible").value = "True"
'des("text").value = "MoTuWeThFrSaSu.*"


On error resume next
Set wtbs = Browser("index:=0").Page("index:=0").ChildObjects(des)

For i = 0 To wtbs.count-1
	
	if wtbs(i).getroproperty("class") = "ui-datepicker-calendar" then
'	wtbs(i).refreshobject
	wtbs(i).highlight
	print wtbs(i).getroproperty("class")
	End if
Next

'If err.number<>0 Then
'	
'	Reporter.ReportEvent micFail,"webtable not found","failed"
'End If
  
  
  
  
  
  
  
  
  
  
  
  
  
'
'
''below function will invoke both datasheet and Tests script sheet 
'Call UpdateIterationCount_Script("C:\Automation_TCRM\kptravels\TEST\kptravels_Datasheet.xls","C:\Automation_TCRM\kptravels\TEST\kptravelsScript.xlsx")
'
''below function will read each function or keyword from Testscript excel and execute it .
'ExecuteTestCase "kptravelsScript.xls
	
'Next

'Dim files
'Set fso = Createobject("Scripting.filesystemobject")
'Set objfol = fso.GetFolder("D:\Softwares1\")
'Set subfol = objfol.SubFolders
'For Each  files in subfol
'	msgbox files.name
'Next
'  
'rc = datatable.GlobalSheet.GetRowCount
''For i = 1 To rc Step 1D:\ProjectSelenium
'datatable.GlobalSheet.SetCurrentRow(2)
'val = datatable.Value("Test","Global")
'msgbox	val




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


