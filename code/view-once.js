(() => {
	const loadModule = (name, id) => {
		window.ErrorGuard?.skipGuardGlobal(true);
		return new Promise(r => {
			try {
				window.webpackChunkwhatsapp_web_client?.push([[Math.random()], {}, e => {
					const module = e(id);
					r(module.default ? module.default : module);
				}]);
				r(window.require?.(name));
			}
			catch (e) {
				r(null);
			}
		});
	};
	
	const getIndexedDB = (database, table, key) => {
		return new Promise(r => {
			const dbRequest = window.indexedDB.open(database);
			
			dbRequest.onsuccess = (event) => {
				const db = event.target.result;
				const transaction = db.transaction(table, "readonly");
				const objectStore = transaction.objectStore(table);
				const getRequest = objectStore.get(key);

				getRequest.onsuccess = (event) => {
					r(event.target.result);
				};

				getRequest.onerror = (event) => {
					r(null);
				};
			};
			
			dbRequest.onerror = (event) => {
				r(null);
			};
		});
	}
	
	const setIndexedDB = (database, table, object) => {
		return new Promise(r => {
			const dbRequest = window.indexedDB.open(database);

			dbRequest.onsuccess = (event) => {
				const db = event.target.result;
				const transaction = db.transaction(table, "readwrite");
				const objectStore = transaction.objectStore(table);
				const putRequest = objectStore.put(object);
				
				putRequest.onsuccess = (event) => {
					r(true);
				};
				putRequest.onerror = (event) => {
					r(false);
				};
			};
			
			dbRequest.onerror = (event) => {
				r(null);
			};
		});
	}
	
	const interval = setInterval(async () => {
		if (!document.querySelector("#side")) return;
		clearInterval(interval);
		
		(await loadModule("WAWebCollections", 729804)).Msg.on("add", async msg => {
			msg.__x_isViewOnce = false;
			
			const IDBmessage = await getIndexedDB("model-storage", "message", msg.id._serialized);
			if (!IDBmessage) return;
			IDBmessage.isViewOnce = false;
			setIndexedDB("model-storage", "message", IDBmessage);
		});
		
		(await loadModule("WAWebChatCollection", 351053)).ChatCollection.getModelsArray().forEach(async e => {
			const lastMessage = e.msgs._models[e.msgs._models.length-1];
			if (!lastMessage) return;
			
			lastMessage.isViewOnce = false;
			
			const IDBmessage = await getIndexedDB("model-storage", "message", lastMessage.id._serialized);
			if (!IDBmessage) return;
			IDBmessage.isViewOnce = false;
			setIndexedDB("model-storage", "message", IDBmessage);
		});
		
	}, 100);
})();