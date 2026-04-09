interface MapEmbedProps {
  src: string;
  title: string;
}

export default function MapEmbed({ src, title }: MapEmbedProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md">
      <iframe
        src={src}
        title={title}
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
