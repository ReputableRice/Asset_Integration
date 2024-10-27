"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createClient } from "../../utils/supabase/client";

export default function MemoryList({ user }) {
    const supabase = createClient();
    const [loading, setLoading] = useState(null);
    const [memories, setMemories] = useState(null);

    const containerStyles =
        "text-5xl border-4 border-yellow-100 p-4 text-center text-yellow-100";

    const getMemories = useCallback(async () => {
        try {
            setLoading(true);

            const { data, error } = await supabase
                .from("memories")
                .select("description, image_url")
                .eq("user_id", user?.id);

            if (error) throw error;
            if (data) setMemories(data);
        } catch {
            alert("Error fetching memories");
        } finally {
            setLoading(false);
        }
    }, [user, supabase]);

    useEffect(() => {
        getMemories();
    }, [user, getMemories]);

    if (memories) {
        const memoriesList = [];

        memories.forEach((memory, index) => {
            memoriesList.push(
                <li className='mb-2' key={index}>
                    <div>
                        <img src={memory.image_url} />
                    </div>
                    <p className='text-base'>{memory.description}</p>
                    <hr/>
                </li>
            );
        });

        return (
            <div className={containerStyles}>
                <ul>{memoriesList}</ul>
            </div>
        );
    }

    if (loading) {
        <div className={containerStyles}>
            <span>🌷</span>
            <span>💐</span>
            <span>🌹</span>
        </div>;
    }

    return <div className={containerStyles}>💐🌷🌹</div>;
}