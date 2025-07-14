
custom hook is practically a component that returns some values instead of jsx template, and thats it

If you need to call more than one simple hook in the body of a component, use a custom hook.

If two or more hooks represent a single piece of functionality, use a custom hook.


next js performance
good caching practice is how you keep the cost down by letting one expensive render serve multipe user requests.


"use client"

import React, { useState, DragEvent } from 'react'
import { Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ReadingList() {
  const [urls, setUrls] = useState<string[]>([])

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const droppedText = e.dataTransfer.getData('text')
    if (droppedText.startsWith('http://') || droppedText.startsWith('https://')) {
      setUrls(prevUrls => [...prevUrls, droppedText])
    }
  }

  const removeUrl = (indexToRemove: number) => {
    setUrls(prevUrls => prevUrls.filter((_, index) => index !== indexToRemove))
  }

  return (
    <div 
      className="min-h-screen p-4 bg-gray-100 flex flex-col"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h1 className="text-2xl font-bold mb-4">My Reading List</h1>
      <p className="mb-4 text-gray-600">Drag and drop links anywhere on this page to add them to your reading list.</p>
      <div className="flex-grow bg-white rounded-lg shadow p-4 overflow-auto">
        {urls.length === 0 ? (
          <p className="text-gray-500 text-center">Your reading list is empty. Drag some links here!</p>
        ) : (
          <ul className="space-y-2">
            {urls.map((url, index) => (
              <li key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline truncate flex-grow"
                >
                  {url}
                </a>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeUrl(index)}
                  className="ml-2 text-gray-500 hover:text-red-500"
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Remove</span>
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}