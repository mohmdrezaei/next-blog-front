

export default function Home() {
  return (
   <main className="p-2.5">
    <header className="flex justify-between mb-12">
      <a href="#" className="font-bold">MyBlog</a>
      <nav className="flex gap-3">
      <a href="#">Login</a>
      <a href="#">Register</a>
      </nav>
    </header>
    <div>
      <img src="/images/slide1.svg"/>
    </div>
   </main>
  );
}
