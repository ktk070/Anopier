<?require_once("config.php");?>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title id="page-title"></title>
  <style type="text/css">
      .x-table-layout-cell {
        height:40px;
        text-align:center;
        vertical-align:middle;
    }
    .x-table-layout-cell table {
        margin:auto
    }
    .response {
        padding:4px 0 4px 20px;
        font-size:13px;
    }
  </style>

</head>
<body>

<div id="loadScreen">
Loading...
</div>

  <link rel="stylesheet" type="text/css" href="ext/resources/css/ext-all.css">
  <script type="text/javascript" src="ext/adapter/ext/ext-base.js"></script>
  <script type="text/javascript" src="ext/ext-all-debug.js"></script>

  <script type="text/javascript" src="api.php"></script>
  <script type="text/javascript">
      Ext.Direct.addProvider(Anopier.API);
  </script>
  
  <script type="text/javascript" src="Anopier/Javascript/anopier.js"></script>

</body>
</html>