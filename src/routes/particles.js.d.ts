declare module 'particles.js' {
    const particlesJS: {
      load: (tagId: string, config: any, callback: () => void) => void;
    };
    export default particlesJS;
  }
  