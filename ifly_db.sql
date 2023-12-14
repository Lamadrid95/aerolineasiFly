SELECT * FROM ifly_db.destinos;
INSERT INTO destinos (nombre, descripcion) VALUES ('Ecuador', 'Destino con 35% de descuento.');
UPDATE destinos
SET nombre = 'Argentina', descripcion = 'Para los amantes del tango y la buena comida.'
WHERE id = 1;
ALTER TABLE destinos
ADD COLUMN precio_usd DECIMAL(10, 2);
UPDATE destinos
SET nombre = 'Argentina', descripcion = 'Para los amantes del tango y la buena comida.', precio_usd = '900.0'
WHERE id = 1;
