import FriendListItem from './FriendListItem';


export default function FriendList({items}) {
    return (
        < ul className="friend-list" >
            {items.map(item => (
                <FriendListItem
                key={item.id}
                name={item.name}
                avatar={item.avatar}
                isOnline={ item.isOnline}
                />
            
            ))}
            </ul > 
    )
}



{/*  */}
{/* <ul class="friend-list">
  <!-- Произвольное кол-во FriendListItem -->
</ul> */}