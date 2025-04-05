import MediaPost from "@/components/MediaPost";
import MobileNav from "@/components/MobileNav";
import {
  Heart,
  Camera,
  PenLine,
  MessageCircle,
  Trophy,
  Gamepad2
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="h-[calc(100vh-57.5px)] overflow-y-scroll snap-y snap-mandatory">
        <MediaPost
          src="/videos/video1.mp4"
          mediaType="video"
          user="usuario1"
          descripcion="Mi primer video"
          logros={[
            { icon: <Trophy className="w-4 h-4" />, text: "Nivel 1" },
            { icon: <Camera className="w-4 h-4" />, text: "Primer video" }
          ]}
        />

        <MediaPost
          src="/fotos/foto1.jpg"
          mediaType="image"
          user="usuario2"
          descripcion="Un gran recuerdo"
          logros={[
            { icon: <Camera className="w-4 h-4" />, text: "Fotógrafo" },
            { icon: <Heart className="w-4 h-4" />, text: "200 likes" }
          ]}
        />

        <MediaPost
          mediaType="text"
          user="usuario4"
          descripcion="Anoche ocurrió algo mágico: subí mi primer video y ¡BOOM! 💥 El apoyo fue brutal. Comentarios, risas y hasta un par de cristales brillantes ✨. Me hace ilusión compartir momentos reales, sin filtros ni postureo. Si te gusta este contenido, quédate cerca, porque esto acaba de empezar. ¡Gracias por tanto, tan pronto! 🙌 ¿Cuál fue tu parte favorita? Estoy leyendo todo. 🧠❤️ ¡Vamos a por más historias épicas juntos!"

          logros={[
            { icon: <PenLine className="w-4 h-4" />, text: "Narrador" },
            { icon: <MessageCircle className="w-4 h-4" />, text: "Comentario destacado" }
          ]}
        />

        <MediaPost
          src="/videos/video2.mp4"
          mediaType="video"
          user="usuario3"
          descripcion="Highlight de partida"
          logros={[
            { icon: <Trophy className="w-4 h-4" />, text: "Gamer pro" },
            { icon: <Gamepad2 className="w-4 h-4" />, text: "Clip viral" }
          ]}
        />

      </section>
      <MobileNav />
    </main>

  );
}
