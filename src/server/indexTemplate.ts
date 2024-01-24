export const indexTemplate = (content: string): string => `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>test</title>
  <script src="/static/client.js" type="application/javascript"></script>
</head>
<body class="body">
<div id="root">${content}</div>
</body>
</html>
`;
