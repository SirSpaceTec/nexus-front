import MediaPost from "@/components/MediaPost";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="h-[calc(100vh-57.5px)] overflow-y-scroll snap-y snap-mandatory">
        <MediaPost
          src="/videos/video1.mp4"
          mediaType="video"
          user="usuario1"
          descripcion="Mi primer video"
          logros={["🔥 Nivel 1", "📷 Primer video"]}
        />

        <MediaPost
          src="/fotos/foto1.jpg"
          mediaType="image"
          user="usuario2"
          descripcion="Un gran recuerdo"
          logros={["📸 Fotógrafo", "❤️ 200 likes"]}
        />
        <MediaPost
          mediaType="text"
          user="usuario4"
          descripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas atque eos accusamus dicta assumenda illum deleniti velit facere nesciunt repellendus numquam quae, laboriosam, reprehenderit sunt aut at nisi? Doloremque nostrum odit maiores blanditiis necessitatibus corporis deserunt cupiditate ipsa obcaecati accusantium recusandae explicabo maxime, laudantium fugiat repellat sint? Quos cupiditate reiciendis, eaque ut obcaecati debitis hic, est consequatur in laudantium provident illum porro sed quaerat quis tempore quod harum esse. Aperiam atque quasi officia magnam eius. abc abc abc"
          logros={["📝 Narrador", "💬 Comentario destacado"]}
        />
        <MediaPost
          src="/videos/video2.mp4"
          mediaType="video"
          user="usuario3"
          descripcion="Highlight de partida"
          logros={["🏆 Gamer pro", "🎮 Clip viral"]}
        />
      </section>
      <MobileNav />
    </main>

  );
}
