import { WithLoggingProps, withLogging } from "../core/logger/logger";

interface PostSearchProps extends WithLoggingProps{
    onFiltersChange: (search: string) => void;
}

const  PostSearchBase = ({onFiltersChange }: PostSearchProps) => {
    return (
        <div>
             <input
                type="text"
                placeholder='Search Authors In Posts...'
                onChange={(e) => onFiltersChange(e.target.value)}
                style={{ padding: '10px', borderRadius:'5px', width:'250px'}}
            />
        </div>
    );
}

export const PostSearch = withLogging(PostSearchBase, 'PostSearch');