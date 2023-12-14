from flask import Flask, jsonify, request
import mysql.connector

app = Flask(__name__)

# Configuración de la conexión a la base de datos MySQL
mydb = mysql.connector.connect(
    host="localhost",
    user="ifly_agent",
    password="@_Ki8uhy6tfr4es",
    database="ifly_db"
)

# Datos de destinos turísticos
destinos = [
    {"id": 1, "nombre": "Francia", "descripcion": "Segundo", "precio_usd": "500.0"},
    {"id": 2, "nombre": "Italia", "descripcion": "Promoción válida hasta llenar el avión", "precio_usd": "900.0"},
    {"id": 3, "nombre": "España", "descripcion": "Vuelo programado para diciembre", "precio_usd": "600.0"},
    {"id": 4, "nombre": "Colombia", "descripcion": "Disfruta de playas paradisiacas", "precio_usd": "800.0"},
    {"id": 5, "nombre": "Rusia", "descripcion": "Un destino frío para este verano", "precio_usd": "1200.0"}
]

# Ruta para obtener todos los destinos (GET)
@app.route('/destinos', methods=['GET'])
def obtener_destinos():
    cursor = mydb.cursor(dictionary=True)
    cursor.execute("SELECT * FROM destinos")
    destinos = cursor.fetchall()
    return jsonify(destinos)

# Ruta para agregar un nuevo destino (POST)
@app.route('/destinos', methods=['POST'])
def agregar_destino():
    nuevo_destino = request.json
    nombre = nuevo_destino.get('nombre')
    descripcion = nuevo_destino.get('descripcion')
    precio_usd = nuevo_destino.get('precio_usd')
    cursor = mydb.cursor()
    consulta = "INSERT INTO destinos (nombre, descripcion, precio_usd) VALUES (%s, %s, %s)"
    datos = (nombre, descripcion, precio_usd)
     
    cursor.execute(consulta, datos)
    mydb.commit()
    
    return jsonify({"mensaje": "Destino agregado correctamente"})

# Ruta para actualizar un destino existente (PUT)
@app.route('/destinos/<int:id>', methods=['PUT'])
def actualizar_destino(id):
    nombre = request.json.get('nombre')
    descripcion = request.json.get('descripcion')
    precio_usd = request.json.get('precio_usd')
    
    cursor = mydb.cursor()
    consulta = "UPDATE destinos SET nombre = %s, descripcion = %s, precio_usd = %s WHERE id = %s"
    datos = (nombre, descripcion, precio_usd, id)
    
    cursor.execute(consulta, datos)
    mydb.commit()
    
    if cursor.rowcount > 0:
        return jsonify({"mensaje": "Destino actualizado correctamente"})
    else:
        return jsonify({"mensaje": "Destino no encontrado"})
    

# Ruta para eliminar un destino (DELETE)
@app.route('/destinos/<int:id>', methods=['DELETE'])
def eliminar_destino(id):
    cursor = mydb.cursor()
    consulta = "DELETE FROM destinos WHERE id = %s"
    datos = (id,)
    
    cursor.execute(consulta, datos)
    mydb.commit()
    
    if cursor.rowcount > 0:
        return jsonify({"mensaje": "Destino eliminado correctamente"})
    else:
        return jsonify({"mensaje": "Destino no encontrado"})
    

if __name__ == '__main__':
    app.run(debug=True)
