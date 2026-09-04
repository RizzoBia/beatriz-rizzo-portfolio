@echo off
chcp 65001 > nul
echo ==========================================
echo GERADOR DE CURRICULO PDF
echo ==========================================
echo.
echo Compilando curriculo.html para PDF...

set "CHROME_PATH="
if exist "C:\Program Files\Google\ChromeApplication\chrome.exe" set "CHROME_PATH=C:\Program Files\Google\Chrome\Application\chrome.exe"
if exist "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" set "CHROME_PATH=C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
if exist "%LocalAppData%\Google\Chrome\Application\chrome.exe" set "CHROME_PATH=%LocalAppData%\Google\Chrome\Application\chrome.exe"

if "%CHROME_PATH%"=="" (
    echo.
    echo [ERRO] Nao foi possivel encontrar a instalacao do Google Chrome nas pastas padrao.
    echo Por favor, instale o Chrome ou configure o caminho manualmente no script.
) else (
    echo Usando o Chrome em: "%CHROME_PATH%"
    "%CHROME_PATH%" --headless --disable-gpu --no-sandbox --no-header-footer --print-to-pdf="%USERPROFILE%\Downloads\beatriz.pdf" "file:///%cd%/curriculo.html"
    
    if errorlevel 1 (
        echo.
        echo [ERRO] Falha ao gerar o PDF. Verifique se o arquivo PDF nao esta aberto no leitor de PDF.
    ) else (
        echo.
        echo [OK] PDF gerado e salvo com sucesso em:
        echo %USERPROFILE%\Downloads\beatriz.pdf
    )
)
echo.
echo Pressione qualquer tecla para sair...
pause > nul
