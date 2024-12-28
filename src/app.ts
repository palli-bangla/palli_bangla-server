import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';

import cookieParser from 'cookie-parser';

const app: Application = express();

app.use(cors());


// const corsOptions = {
//   origin: 'http://localhost:3000',  // Allow only this specific origin
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
//   credentials: true,  // Allow cookies and authorization headers
// };

// app.use(cors(corsOptions));  // Apply the CORS configuration


app.use(cookieParser());


//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);


//global error handler
app.use(globalErrorHandler);

//server root page
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.FOUND).json({
    success: true,
    message: "Welcome to Supershop backend server",
  });
  next();
});

// //handle not found
// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.status(httpStatus.NOT_FOUND).json({
//     success: false,
//     message: 'Not Found',
//     errorMessages: [
//       {
//         path: req.originalUrl,
//         message: 'API Not Found',
//       },
//     ],
//   });
//   next();
// });

export default app;
