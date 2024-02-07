import { AxiosPromise } from "axios";
import BaseAPI from "./base/abstract-api";
import { Post as IPost } from "./types";

const host = 'https://trusthub-frotned-server-json.azurewebsites.net';

class PostAPI extends BaseAPI{
    private static _instance: PostAPI;

    private constructor(){
        const baseUrl = `${host}`;        
        super(baseUrl);
    }

    public static get Instance(): PostAPI {        
        return this._instance || (this._instance = new this());        
    }

    public getPosts(): AxiosPromise<IPost[]>{        
        return this.instance.get('/posts');
    }
}

export default PostAPI.Instance;