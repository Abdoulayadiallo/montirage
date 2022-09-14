import { Listepostulant } from "./listepostulant";

export class Postulant {
    id_postulant!: number;
    nom!: string;
    prenom!: string;
    email!: string;
    numero!: string;
    listePostulant!: Listepostulant;
}
