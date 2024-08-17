import React from 'react'
import Card from '../ui/card'
import { Timeline, TimelineItem } from '../ui/timeline'

export default function ExperienceCard() {
    return (
        <Card title='My Experience'>
            <Timeline>
                {
                    experineceData.map((ex, i) => (
                        <TimelineItem
                            key={i}
                            date={ex.date}
                            subTitle={ex.subTitle}
                            title={ex.title}
                            link={ex.link}
                            tag={ex.tag}
                        />
                    ))
                }
            </Timeline>
        </Card>
    )
}

const experineceData = [
    {
        date: "2024 - Now",
        title: "Fresher",
        subTitle: "Ready_to_work",
        link: "",
        tag: "Experience",
    },
]