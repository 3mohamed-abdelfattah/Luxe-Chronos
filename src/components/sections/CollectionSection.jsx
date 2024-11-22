import React from 'react'
// Component
import { CollectionCard } from '@/components'
// Assets
import Watch1 from '@/assets/for_landing/collections/watch1.webp'
import Watch2 from '@/assets/for_landing/collections/watch2.webp'
import Watch3 from '@/assets/for_landing/collections/watch3.webp'

export const CollectionSection = () => {
    return (
        <main className="bg-secondaryColor flex flex-wrap gap-6 justify-around items-center p-8 overflow-hidden">
            <CollectionCard
                watchImage={Watch1}
                model="Rolex"
                watchName="Sky Dweller"
                price="26,800"
            />
            <CollectionCard
                watchImage={Watch2}
                model="Rolex"
                watchName="Sea Dweller"
                price="86,500"
            />
            <CollectionCard
                watchImage={Watch3}
                model="Rolex"
                watchName="Air King"
                price="94,300"
            />
        </main>
    )
}