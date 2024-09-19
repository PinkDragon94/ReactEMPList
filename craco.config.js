module.exports = {
    devServer: {
      setupMiddlewares: (middlewares, devServer) => {
        if (!devServer) {
          throw new Error('webpack-dev-server is not defined');
        }
  
        // Example middleware - logging requests
        middlewares.push((req, res, next) => {
          console.log(`Request URL: ${req.url}`);
          next();
        });
  
        // You can add more middleware here as needed
  
        return middlewares;
      },
    },
  };
  