import { HttpInterceptorFn } from '@angular/common/http';

export const httpinterceptInterceptor: HttpInterceptorFn = (req, next) => {
  // HttpInterceptor
  const apiKey =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTZjYTY3ZDQ0ODU1NjBiMGYyNzgzYTMxOWM0NWQ5YiIsIm5iZiI6MTc0NTYxOTg1OS4zOTgwMDAyLCJzdWIiOiI2ODBjMGI5M2U1YzEwNWM4YTU2ZTE3NTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lpLE2nhriZD6YPOFM_gB5sTO9mqZb6MzknxjBAG09xc';
  req = req.clone({
    setHeaders:{
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    }
  })
  return next(req);
};
