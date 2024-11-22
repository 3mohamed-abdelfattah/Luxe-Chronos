import React from 'react'
// Component
import { CollectionCard } from '@/components'

export const CollectionSection = () => {
    return (
        <main className="bg-secondaryColor flex flex-wrap gap-6 justify-around items-center p-8 overflow-hidden">
            <CollectionCard
                watchImage='https://the1916company.imgix.net/rolex/watch_assets/upright_watches_assets/m336934-0001_drp-upright-bba-with-shadow.png?auto=format,compress'
                model="Rolex"
                watchName="Sky Dweller"
                price="26,800"
            />
            <CollectionCard
                watchImage='https://the1916company.imgix.net/rolex/watch_assets/upright_watches_assets/m336933-0001_drp-upright-bba-with-shadow.png?auto=format,compress'
                model="Rolex"
                watchName="Sea Dweller"
                price="86,500"
            />
            <CollectionCard
                watchImage='https://the1916company.imgix.net/rolex/watch_assets/upright_watches_assets/m336935-0001_drp-upright-bba-with-shadow.png?auto=format,compress'
                model="Rolex"
                watchName="Air King"
                price="94,300"
            />
        </main>
    )
}