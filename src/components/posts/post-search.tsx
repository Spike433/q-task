
interface PostSearchProps {
    onFiltersChange: (search: string) => void;
}

export const  PostSearch = ({onFiltersChange}: PostSearchProps) => {
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