    import mongoose, { connect } from 'mongoose';
    import { MONGO_URI } from '../config';

    const URI = "mongodb+srv://D4V7D:Exito090@gestiondetareas.bak1xqd.mongodb.net/?retryWrites=true&w=majority&appName=GESTIONDETAREAS" ;
    export const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        await connect(URI);
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
    }
    };

