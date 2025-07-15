import Image from 'next/image';

export default function Home() {
  return (
    <main style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fff',
      padding: '20px',
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>$wtf?</h1>
      <Image
        src="/wtf-image.png"
        alt="$wtf Token"
        width={300}
        height={300}
        style={{ borderRadius: '12px' }}
      />
      <p style={{ marginTop: '1.5rem', fontSize: '1.2rem', color: '#555' }}>
        CA - A4PyG53QJiZvfcy87HpJnu2BkW4X7WzfVSpFm1rwbonk
      </p>
    </main>
  );
}
