export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top right blob */}
      <div
        className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '0s' }}
      />
      
      {/* Bottom left blob */}
      <div
        className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
      />
      
      {/* Center accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '4s' }}
      />

      {/* Small floating elements */}
      <div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-float"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute top-3/4 right-1/4 w-6 h-6 bg-accent/30 rounded-full animate-float"
        style={{ animationDelay: '3s' }}
      />
      <div
        className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/40 rounded-full animate-float"
        style={{ animationDelay: '5s' }}
      />
    </div>
  );
}
