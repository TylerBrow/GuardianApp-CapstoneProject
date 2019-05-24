import React from 'react'
import Notifications from '../notifications/Notifications'
import '../notifications/Notifications.css'
import '../main/Main.css'
import '../nav/Navbar.css'
import './Tips.css'
import Logo from '../logo/Logo'

class Tips extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className="homepage">   
                    <div className="notificationreminders">
                        <h1>Notification Reminders</h1>
                        <Notifications />
                    </div>

                    <div className ="tipsmain">
                    <h1>Tips &amp; Advice for Alzheimer's</h1>
                        <div className="advice">
                        
                        <p className="safety">
                        If you are caring for someone with Alzheimer's disease or a related dementia, your role in managing daily tasks will increase as the disease progresses. 
                        Consider practical tips that can help the person with dementia participate as much as possible and enable you to manage tasks effectively.</p>

                        <h2>Reduce frustrations:</h2>
                        <p>A person with dementia might become agitated when once-simple tasks become difficult. To limit challenges and ease frustration:</p>

                        <h2>Schedule wisely...</h2>
                            <p>Establish a daily routine. Some tasks, such as bathing or medical appointments, are easier when the person is most alert and refreshed. Allow some flexibility for spontaneous activities or particularly difficult days.</p>
                        
                        <h2>Take your time...</h2>
                            <p>Anticipate that tasks may take longer than they used to and schedule more time for them. Allow time for breaks during tasks.</p>

                        <h2>Involve the person...</h2>
                        <p>Allow the person with dementia to do as much as possible with the least amount of assistance. For example, he or she might be able to set the table with the help of visual cues or dress independently if you lay out clothes in the order they go on.</p>

                        <h2>Provide choices...</h2>
                        <p>Provide some, but not too many, choices every day. For example, provide two outfits to choose from, ask if he or she prefers a hot or cold beverage, or ask if he or she would rather go for a walk or see a movie.</p>

                        <h2>Provide simple instructions...</h2>
                        <p>People with dementia best understand clear, one-step communication.</p>

                        <h2>Limit napping...</h2>
                        <p>Avoid multiple or prolonged naps during the day. This can minimize the risk of getting days and nights reversed.</p>

                        <h2>Reduce distractions...</h2>
                        <p>Turn off the TV and minimize other distractions at mealtime and during conversations to make it easier for the person with dementia to focus.</p>
                        
                        <h2>Tips:</h2>
                        <p>While every person experiences the early stage of dementia differently, it is common that a person in the early-stage may need cues and reminders to help with memory. As a care partner, it may be necessary for you to take the initiative to determine how you may be able to help. For example, he or she may need help with:</p>
 
                        <p>Keeping appointments</p>
                        <p>Remembering words or names</p>
                        <p>Recalling familiar places or people</p>
                        <p>Managing money</p>
                        <p>Keeping track of medications</p>
                        <p>Planning or organizing</p>
                        <p>Transportation</p>
                        <p>Focus on the person's strengths and how they can remain as independent as possible, and establish a strong channel of communication. Consider ways to work together as a team. For example, if they are still comfortable balancing a checkbook, you may offer to provide a final review.</p>

                        <h2>Challenges of Alzheimer’s care:</h2>
                        
                        <p>Overwhelming emotions as capabilities lessen</p>
                        <p>Fatigue and exhaustion as caregiving demands increase.</p>
                        <p>Isolation and loneliness as independence disappears.</p>
                        <p>Financial and work complications as costs rise and resources are challenged.</p>
                        
                        <h2>Rewards of Alzheimer’s care:</h2>

                        <p>Bonds deepen through care, companionship, and service.</p>
                        <p>Problem solving and relationship skills grow through experience.</p>
                        <p>New relationships form through education and support.</p>
                        <p>Unexpected rewards develop through compassion and acceptance.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tips