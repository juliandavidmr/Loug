var loug = require('../index');
loug.set(false);

loug("Hello")
loug.info("Mensaje de informacion");
loug.dir("Mensaje de dir");
loug.warn("Advertencia")
loug.ignore("mensaje ignora produccion")