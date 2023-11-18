import "./portfolio.scss"

const posts = [
  {
    id: 1,
    title: 'reactj filan',
    image: 'https://images.pexels.com/photos/19121700/pexels-photo-19121700/free-photo-of-a-man-standing-in-front-of-a-rock-formation-with-a-starry-sky.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore ratione eos in amet mollitia saepe dignissimos, possimus necessitatibus quia quis esse, ea aliquam debitis asperiores cum repellendus delectus molestiae.'
  },
  {
    id: 2,
    title: 'next filan',
    image: 'https://images.pexels.com/photos/19121700/pexels-photo-19121700/free-photo-of-a-man-standing-in-front-of-a-rock-formation-with-a-starry-sky.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore ratione eos in amet mollitia saepe dignissimos, possimus necessitatibus quia quis esse, ea aliquam debitis asperiores cum repellendus delectus molestiae.'
  },
  {
    id: 3,
    title: 'filan',
    image: 'https://images.pexels.com/photos/19121700/pexels-photo-19121700/free-photo-of-a-man-standing-in-front-of-a-rock-formation-with-a-starry-sky.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore ratione eos in amet mollitia saepe dignissimos, possimus necessitatibus quia quis esse, ea aliquam debitis asperiores cum repellendus delectus molestiae.'
  },
  {
    id: 4,
    title: 'moein filan',
    image: 'https://images.pexels.com/photos/19121700/pexels-photo-19121700/free-photo-of-a-man-standing-in-front-of-a-rock-formation-with-a-starry-sky.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore ratione eos in amet mollitia saepe dignissimos, possimus necessitatibus quia quis esse, ea aliquam debitis asperiores cum repellendus delectus molestiae.'
  }
]

const Single = ({post}) => {
  return(
    <section>
      {post.title}
    </section>
  )
}

export const Portfolio = () => {
  return (
    <div className="portfolio">
      {posts.map(post => {
        return(
          <Single key={post.id} post={post} />
        )
      })}
    </div>
  )
}