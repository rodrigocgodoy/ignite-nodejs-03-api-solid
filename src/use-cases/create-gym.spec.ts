import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gym-repository'
import { CreateGymUseCase } from './create-gym'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })

  it('should to register', async () => {
    const { gym } = await sut.execute({
      title: 'Gym 01',
      description: null,
      phone: null,
      latitude: -23.4101622,
      longitude: -46.8155989,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
