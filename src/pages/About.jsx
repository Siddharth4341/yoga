import React from "react"

export default function About() {
    return(
        <div class="container" id="about">
            <header className="mt-2 rounded-4">
                <div className="text-center p-3 text-light">
                    <h4>About Our Yoga Practice<br/>Discover the journey to a healthier and more mindful life with us</h4>
                </div>
            </header>
            <h5 class="text-warning">About Yoga</h5>
            <p><span class="text-warning">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span><br/>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div class="container rounded" style={{backgroundColor: "#EEEEEE"}}>
                <div class="row">
                    <div class="col-md-4 col-sm-6 p-4">
                        <img src="https://carmenlorraine.com/wp-content/uploads/2016/05/yoga-on-the-beach-1.jpg" class="img-fluid rounded-3"/>
                    </div>
                    <div class="col-md-4 col-sm-6 p-4">
                        <img src="https://tse2.mm.bing.net/th/id/OIP._7Ox2t3axKXJOBBw7WuKJAAAAA?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" class="img-fluid rounded-3"/>
                    </div>
                    <div class="col-md-4 col-sm-6 p-4">
                        <img src="https://thumbs.dreamstime.com/b/yoga-meditation-portrait-couple-prayer-pose-zen-wellness-mindfulness-training-home-mental-health-peace-men-women-305614530.jpg" class="img-fluid rounded-3"/>
                    </div>
                    <div class="col-md-4 col-sm-6 p-4">
                        <img src="https://tse3.mm.bing.net/th/id/OIP.f9rew2IK5q939lX03d__hAHaJQ?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" class="img-fluid rounded-3"/>
                    </div>
                </div>
            </div>
        </div>
    )
}