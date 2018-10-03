


str = "Nallappa"

If str =  "df" Then

Else
ReportTestValidation " dr","name","it not","PASS"
End If


If str =  "Nallappa" Then
  ReportTestValidation " dr","name","it not","PASS"
Else
ReportTestValidation " MyFirstAttempt","That should be my name","That is my name","PASS"
End If

