import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/User';
import { Request, Response, NextFunction } from 'express'; // Import Express types if you're using Express
import { JWTPayload } from '../libs/types';

const jwtSecret = '12345'; 

export const initializePassport = () => {
  passport.use(new JwtStrategy({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret
    },
    async (jwtPayload: JWTPayload, done) => {
      try {
        const user = await User.findById(jwtPayload.userId);
        if (!user) {
            console.log("no token")
          return done(null, false);
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  ));

  return (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('jwt', { session: false })(req, res, next)
  };
};
